
import { cn } from "@/lib/utils";
import React, { cloneElement, ReactElement, useEffect, useMemo, useState } from "react";
import {
  Controller,
  FieldValues,
  Path,
  PathValue,
  Resolver,
  SubmitHandler,
  useForm,
} from "react-hook-form";

function MattContainer<P extends FieldValues, V>({
  children,
  className,
  classLabel,
  getFormData,
  watchFields,
  resolver,
  watchErrors,
  valueList
}: {
  children: React.ReactNode;
  getFormData: (data: P) => void;
  watchFields?: boolean;
  resolver: Resolver<P>;
  watchErrors?: boolean;
  className: string;
  classLabel:string
  valueList?:{[key:string]:V}
}) {
  const {
    register,
    watch,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({ mode: "all", resolver: resolver });

  const vb={name:""}
if(valueList){
  Object.entries(valueList).forEach(([key , value]) => {
    setValue(key as Path<P>, value as PathValue<P, Path<P>> );
  });

}
 
  const ChildrenToArray = React.Children.toArray(children) as ReactElement[];

  // const [Button, SetButton] = useState<React.ReactNode | null>(null);
  const TypedErrors = errors as any;

  
  
  const handleOnSubmit: SubmitHandler<any> = (data) => {
    getFormData(data);
  };

  const ArraConverted = ChildrenToArray as ReactElement<ReactElement>[]
  const Button = ArraConverted.find(
      (child): child is ReactElement<ReactElement>=> React.isValidElement(child) && child.props.type === 'submit'
  );

  const group = ChildrenToArray.map((InputComponent, index) => {
    if (InputComponent.props.controlled) {
      const FieldName: keyof P = InputComponent.props.name;
      const ChangerMethod = InputComponent.props.ChangerMethod;
      const ChangedValue = InputComponent.props.ChangedValue;
      const FormLabel = InputComponent.props.label;
      return (
        <Controller
          key={index}
          name={FieldName as Path<P>}
          control={control}
          render={({ field }) => {
            return (
              <div className="h-fit m-2 flex flex-col gap-2">
                {FormLabel ? (
                  <p className="text-gray-500 ml-3">{FormLabel}</p>
                ) : null}
                {cloneElement(InputComponent, {
                  [ChangerMethod]: field.onChange,
                  [ChangedValue]: field.value,
                })}
                <p className="mt-1 text-red-500 text-[13px]">
                  {TypedErrors[FieldName]?.message}
                </p>
              </div>
            );
          }}
        />
      );
    } else {
      const FieldName: keyof P = InputComponent.props.name;
      const FormLabel = InputComponent.props.label ? InputComponent.props.label : null;
      const isSubmit = InputComponent.props.type ? InputComponent.props.type === "submit" : false;

      const ClonedInput = isSubmit === false ? cloneElement(InputComponent as ReactElement, {
        ...register(FieldName as Path<P>),
      }) : null;

      return (
        <div key={index} className="h-fit m-2 flex flex-col gap-2">
          <div >
            {isSubmit === false && FormLabel ? (
              <p className={cn("text-gray-500 ml-3 text-[12px]",classLabel)}>{FormLabel}</p>
            ) : null}
            {ClonedInput}
            {isSubmit ? null : (
              <p className="mt-1 text-red-500 text-[12px] ml-3">
                {TypedErrors[FieldName]?.message}
              </p>
            )}
          </div>
        </div>
      );
    }
  });

  return (
    <form  onSubmit={handleSubmit(handleOnSubmit)} className="flex flex-col justify-center items-center">
    
     <div className={className}>

     {group}
     </div>
     
     
      {Button}
      {watchFields ? (
        <div className="flex flex-col">
          <h1 className="text-red-600 font-bold">WATCHING FIELDS</h1>
          <pre>{JSON.stringify(watch(), null, 2)}</pre>
        </div>
      ) : null}
      {watchErrors ? (
        <div className="flex flex-col gap-2">
          <h1 className="text-red-600 font-bold">ERROR LIST</h1>
          {Object.entries(errors).map(([fieldName, error]) => (
            <p key={fieldName}>{JSON.stringify(error?.message)}</p>
          ))}
        </div>
      ) : null}
    </form>
  );
}

export default MattContainer;
