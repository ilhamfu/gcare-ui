import { Checkbox as RadCheckbox } from "radix-ui";
import type { CheckboxProps as RadCheckboxProps } from '@radix-ui/react-checkbox'
import { twMerge } from "tailwind-merge";
import { CheckIcon } from "@radix-ui/react-icons";

type CheckboxProps = {} & RadCheckboxProps;


export default function Checkbox({ className, ...rest }: CheckboxProps) {

  return <RadCheckbox.Root {...rest} className={twMerge("text-center text-white w-5 h-5 bg-primary-default rounded-md flex items-center justify-center", className)}>
    {!rest.checked && <RadCheckbox.Indicator>&nbsp;</RadCheckbox.Indicator>}
    {rest.checked && <RadCheckbox.Indicator><CheckIcon /></RadCheckbox.Indicator>}
  </RadCheckbox.Root>

}
