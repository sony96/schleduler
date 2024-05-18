export type HeaderProps = {
  startDate: string;
  setStartDate: (date: string) => void;
  endDate: string;
  setEndDate: (date: string) => void;
};

export type DateHandler = (date: string, type: "start" | "end") => void;

export enum DATE_TYPE {
  START = "start",
  END = "end",
}
