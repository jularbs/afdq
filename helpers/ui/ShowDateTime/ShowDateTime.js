import { utcToZonedTime, format } from "date-fns-tz";

const ShowDateTime = ({ data, className, style }) => {
  let date = new Date();
  const timeZone = "UTC";
  if (!data) {
    return <div className={`${className}`}>Date Unknown</div>;
  } else {
    const zonedDate = utcToZonedTime(data, timeZone);

    const pattern = "dd MMMM yyyy";
    const output = format(zonedDate, pattern, { timeZone: "Asia/Manila" });

    return (
      <div className={`${className}`} style={style}>
        {output}
      </div>
    );
  }
};

export default ShowDateTime;
