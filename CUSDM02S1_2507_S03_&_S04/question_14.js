const user = { name: "Alice", role: "admin", active: false };

const message = user.role === "admin" && user.active ? "Admin Access Granted!" : user.role === "admin" && !user.active ? "Admin Access Revoked" : user.role === "user" && user.active ? "User Access Granted!" : user.role === "user" && !user.active ? "User Access Revoked" : "Access Denied";

console.log(message);

