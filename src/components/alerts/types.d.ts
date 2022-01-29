export interface EmptyStateComponentProp {
  model: string;
  canAdd: boolean;
  onAdd: () => void;
  message?: string;
}
