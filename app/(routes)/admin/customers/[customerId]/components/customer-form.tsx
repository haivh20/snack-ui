"use client";

import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Trash } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertModal } from "@/components/admin/modals/alert-modal";
import { Heading } from "@/components/admin/heading";

const formSchema = z.object({
  name: z.string().min(2),
  status: z.number(),
});

type CustomerFormValues = z.infer<typeof formSchema>;

export interface CustomerProps {
  name: string;
  status: number;
}

interface CustomerFormProps {
  initialData: CustomerProps | null;
}

export const CustomerForm: React.FC<CustomerFormProps> = ({ initialData }) => {
  const params = useParams();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const title = initialData ? "Edit customer" : "Create customer";
  const description = initialData ? "Edit a customer." : "Add a new customer";
  const toastMessage = initialData ? "Customer updated." : "Customer created.";
  const action = initialData ? "Save changes" : "Create";

  const form = useForm<CustomerFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: "",
      status: 0,
    },
  });

  const onSubmit = async (data: CustomerFormValues) => {
    try {
      setLoading(true);
      if (initialData) {
        await axios.patch(
          `http://localhost:8080/api/v1/khach-hang/${params.customerId}`,
          data
        );
      } else {
        await axios.post(`http://localhost:8080/api/v1/khach-hang/add`, data);
      }
      router.refresh();
      router.push(`/admin/customers`);
      toast.success(toastMessage);
    } catch (error: any) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(
        `http://localhost:8080/api/v1/khach-hang/${params.customerId}`
      );
      router.refresh();
      router.push(`/admin/customers`);
      toast.success("Color deleted.");
    } catch (error: any) {
      toast.error("Make sure you removed all products using this color first.");
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
        {initialData && (
          <Button
            disabled={loading}
            variant="destructive"
            size="sm"
            onClick={() => setOpen(true)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <div className="md:grid md:grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>tenKhachHang</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className="ml-auto" type="submit">
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};
