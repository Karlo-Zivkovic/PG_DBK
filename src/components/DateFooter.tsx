interface DateFooterProps {
  dateString: string;
}
const DateFooter = ({ dateString }: DateFooterProps) => {
  return (
    <div className="flex gap-5 items-center text-siva2 font-medium text-xs">
      <div className="flex gap-2 items-center">
        <img src="mdi_calendar-range.svg" alt="" />
        <p>{dateString}</p>
      </div>
      <div className="flex gap-2 items-center">
        <img src="Vector.svg" alt="" />
        <p>Posted by admin</p>
      </div>
    </div>
  );
};
export default DateFooter;

