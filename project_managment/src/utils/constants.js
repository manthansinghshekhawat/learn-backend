export const UserRolesEnum = {
  ADMIN: "admin",
  PROJECT_ADMIN: "project_admin",
  MEMBER: "member",
};
export const AvailableUserRoles = Object.values(UserRolesEnum); // Array of the objects

export const TaskStatusEnum = {
  TODO: "To Do",
  IN_PROGRESS: "In Progress",
  REVIEW: "Review",
  DONE: "Done",
};

export const AvailableTaskStatus = Object.values(TaskStatusEnum); // Array of the objects
