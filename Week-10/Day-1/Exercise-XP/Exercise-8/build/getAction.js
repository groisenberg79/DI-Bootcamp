"use strict";
const getAction = (role) => {
    switch (role) {
        case "admin":
            return "Manage users and settings";
            break;
        case "editor":
            return "Edit content";
            break;
        case "viewer":
            return "View content";
            break;
        case "guest":
            return "Limited access";
            break;
        case "unknown":
            return "Invalid role";
            break;
        default:
            break;
    }
};
console.log(`admin: ${getAction("admin")}`);
console.log(`viewer: ${getAction("viewer")}`);
