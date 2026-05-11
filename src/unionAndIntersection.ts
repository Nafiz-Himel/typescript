//uniion | 

type UserRole = 'admin' | 'user' | 'guest';

const getDashboard = (role: UserRole) => {
    if(role === 'admin'){
        return 'Admin Dashboard'
    }
    else if(role === 'user') {
        return 'User Dashboard';
    }
    else {
        return 'Guest Dashboard';
    }
};

// getDashboard('ntg')
getDashboard('guest')

//intersection &

type Employee = {
    name: string;
    id: string;
    phoneNo: string;
};

type Manager ={
    designation: string;
    teamSize: number;
};

type EmployeeManager = Employee & Manager;

const ChowdhuryShahed: EmployeeManager = {
    name: 'Chowdhury Shaheb',
    id: '123',
    phoneNo: '019000',
    designation: 'manager',
    teamSize: 10,
}