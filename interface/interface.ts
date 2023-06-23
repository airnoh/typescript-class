interface formData{
    userName: string,
    email: string,
    id: number,
    married: boolean,
}

const form: formData={
    userName: 'Enobonge',
    email: 'enobonge@email.com',
    id: 9,
    married: false,
}
console.table(form);