
// Defines different types of jobs with their base salaries
export const jobRoles = [
  { id: "data-analyst", title: "Data Analyst", baseSalary: 500000 },
  { id: "data-scientist", title: "Data Scientist", baseSalary: 650000 },
  { id: "business-analyst", title: "Business Analyst", baseSalary: 800000 },
  { id: "power-bi-developer", title: "Power BI Developer", baseSalary: 550000 },
  { id: "bi-analyst", title: "BI Analyst", baseSalary: 700000 },
  { id: "prompt-engineer", title: "Prompt Engineer", baseSalary: 500000 },
  { id: "gen-ai-specialist", title: "Gen AI Specialist", baseSalary: 750000 },
  { id: "ai-product-analyst", title: "AI Product Analyst", baseSalary: 850000 },
  { id: "nlp-associate", title: "NLP Associate", baseSalary: 500000 },
];

// Defines multipliers based on experience levels
export const experienceLevels = [
  { id: "entry", title: "Entry Level (0-2 years)", multiplier: 0.8 },
  { id: "mid", title: "Mid-Level (3-5 years)", multiplier: 1.0 },
  { id: "senior", title: "Senior (6-9 years)", multiplier: 1.4 },
  { id: "lead", title: "Lead/Principal (10+ years)", multiplier: 1.8 },
];

// Defines education level adjustments
export const educationLevels = [
  { id: "high-school", title: "High School", adjustment: 0 },
  { id: "associate", title: "Associate Degree", adjustment: 5000 },
  { id: "bachelor", title: "Bachelor's Degree", adjustment: 10000 },
  { id: "master", title: "Master's Degree", adjustment: 15000 },
  { id: "phd", title: "PhD", adjustment: 25000 },
];

// Defines location cost of living adjustments
export const locations = [
  { id: "hyderabad", title: "Hyderabad", adjustment: 0 },
  { id: "bengaluru", title: "Bengaluru", adjustment: 0 },
  { id: "ncr", title: "NCR", adjustment: 0 },
  { id: "chennai", title: "Chennai", adjustment: 0 },
  { id: "mumbai", title: "Mumbai", adjustment: 0 },
  { id: "kolkata", title: "Kolkata", adjustment: 0 },
  { id: "pune", title: "Pune", adjustment: 0 },
  { id: "anywhere-india", title: "Anywhere in India", adjustment: 0 }
];


// Calculate the estimated salary based on inputs
export function calculateSalary(
  jobRoleId: string,
  experienceLevelId: string,
  educationLevelId: string,
  locationId: string
): {
  base: number;
  adjusted: number;
  breakdown: {
    baseSalary: number;
    experienceAdjustment: number;
    educationAdjustment: number;
    locationAdjustment: number;
  };
} {
  // Find the selected job role
  const jobRole = jobRoles.find((role) => role.id === jobRoleId);
  if (!jobRole) {
    throw new Error("Invalid job role");
  }

  // Find the selected experience level
  const experienceLevel = experienceLevels.find((level) => level.id === experienceLevelId);
  if (!experienceLevel) {
    throw new Error("Invalid experience level");
  }

  // Find the selected education level
  const educationLevel = educationLevels.find((level) => level.id === educationLevelId);
  if (!educationLevel) {
    throw new Error("Invalid education level");
  }

  // Find the selected location
  const location = locations.find((loc) => loc.id === locationId);
  if (!location) {
    throw new Error("Invalid location");
  }

  // Calculate base salary with experience multiplier
  const baseWithExperience = jobRole.baseSalary * experienceLevel.multiplier;
  
  // Add education adjustment
  const withEducation = baseWithExperience + educationLevel.adjustment;
  
  // Add location adjustment
  const finalSalary = withEducation + location.adjustment;

  return {
    base: jobRole.baseSalary,
    adjusted: Math.round(finalSalary),
    breakdown: {
      baseSalary: jobRole.baseSalary,
      experienceAdjustment: Math.round(baseWithExperience - jobRole.baseSalary),
      educationAdjustment: educationLevel.adjustment,
      locationAdjustment: location.adjustment,
    }
  };
}

// Format currency values
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}
