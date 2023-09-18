import { cn } from "@/lib/util";
import { VariantProps, cva } from "class-variance-authority";
import { InputHTMLAttributes, FC, useState, ChangeEvent } from "react";



export const InputVariant = cva(
    ' inline-flex w-full  rounded-md text-sm font-medium transition-color focus:outline-none lg:leading-8 sm:leading-3   disabled:opacity-50 disabled:pointer-events-none ',
    {
      variants: {
        variant: {
          default: 'border border-2  hover:bg-teal-100 hover:border-red-400',
          ghost: 'bg-transparent hover:text-slate-900 hover:bg-slate-200',

        },
      },
      defaultVariants: {
        variant: 'default',
      },
    })

export interface inputProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof InputVariant>{
    isLoading?: boolean
}

const page: FC<inputProps> = ({className,children,variant,isLoading,size,...props}) => {
  const [current, setCurrent] = useState<string>();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
  e.preventDefault();
  setCurrent(e.target.value);
  console.log(current)
  };  
    return <input className={cn(InputVariant({variant,className}))} disabled={isLoading} onChange={handleOnChange}  {...props}>
        {children}
    </input>
}

export default page