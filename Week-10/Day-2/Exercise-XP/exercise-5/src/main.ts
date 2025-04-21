interface User{
  readonly id: number;
  name: string;
  email: string;
}

interface PremiumUser extends User{
  membershipLevel?: string; 
}

function printUserDetails(user: PremiumUser): void {
  console.log(`ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
  
  if (user.membershipLevel) {
    console.log(`Membership: ${user.membershipLevel}`);
  } else {
    console.log("Membership: (none)");
  }
}

const regularUser: PremiumUser = {
  id: 1,
  name: "Alice",
  email: "alice@example.com"
};

const premiumUser: PremiumUser = {
  id: 2,
  name: "Bob",
  email: "bob@example.com",
  membershipLevel: "Gold"
};

printUserDetails(regularUser);
printUserDetails(premiumUser);