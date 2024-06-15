import Events from "./Events";

interface MarkedDate
{
    marked: boolean;
    dotColor: string;
    event: Events;
}

interface MarkedDates
{
    [key: string]: MarkedDate;
}

export default MarkedDates;