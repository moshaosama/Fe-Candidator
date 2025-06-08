export interface CreateSkillData {
  candidator_id: number;
  Skill: string;
}

export interface SkillData {
  result: {
    result: {
      id: number;
      candidator_id: number;
      Skill: string;
    }[];
    statusbar: string;
  };
  loading: boolean;
  error: string;
}
