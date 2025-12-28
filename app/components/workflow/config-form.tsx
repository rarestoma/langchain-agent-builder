import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useContext } from "react";
import { BuilderContext, useDrawer } from "react-flow-builder";
import { useForm } from "react-hook-form";

const ConfigForm: React.FC = () => {
  const { selectedNode: node } = useContext(BuilderContext);

  const { closeDrawer: cancel, saveDrawer: save } = useDrawer();

  const form = useForm();

  const handleSubmit = async () => {};

  return (
    <div>
      <Form {...form}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </Form>
      <div>
        <Button onClick={cancel}>Close</Button>
        <Button variant="default" onClick={handleSubmit}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default ConfigForm;
