export const getEmployees = async () => {
    const url = 'https://reqres.in/api/users?per_page=12';
    const res = await fetch(url);
    const data = await res.json();
    const arrOfNames = data.data.map((item => item.first_name))
    return arrOfNames;
}
