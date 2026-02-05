// Organization and assignment mappings
export const ORGANIZATIONS = {
  "IT3049C-Spring26": {
    name: "DA5402-MLOps-JAN26",
    owner: "DA5402-MLOps-JAN26", // GitHub organization/owner name
    assignments: {
      "Assignment 1":"assignment-1"
    }
  }
} as const;

export type OrganizationKey = keyof typeof ORGANIZATIONS;
