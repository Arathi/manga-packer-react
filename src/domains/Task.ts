export default interface Task {
  id: string;
  url: string;
  fileName: string;
  status: Status;
  loaded?: number;
  total?: number;
}

export enum Status {
  Pending = 'pending',
  Running = 'running',
  Success = 'success',
  Failure = 'failure',
}
