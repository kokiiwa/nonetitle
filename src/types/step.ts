export interface Step {
  id: number;
  title: string;
}

export interface StepStatus {
  isActive: boolean;
  isCompleted: boolean;
}