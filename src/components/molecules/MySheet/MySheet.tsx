import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function MySheet({ trigger, children, title }) {
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent className="w-[16rem] sm:w-[20rem]">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription />
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
}
