// import { useNavigate } from 'react-router-dom'


export const addCustomer = async (data) => {
    try {
        const res = await fetch("http://localhost:4000/api/createcustomer",
            {
                method: "POST",
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
                // body: JSON.stringify({ id: data.id, name: data.name, contact: Number.parseInt(data.contact), email: data.email })
            });
        // console.log("**********RESPONSE::::", res);

        const j = await res.json();
        return j;
        // console.log("RESPONSE::::", j);

        // if (j.success===false) alert("Enter Valid Details"); else alert("Added Successfully 👍")
        // if (j.success===true){
        //     return true;
        // }
        // else{
        //     return false
        // }
    }
    catch (e) { console.error(e); }
}
export const updateCustomer = async (cid, data) => {
    try {
        console.log("action update:::", cid, data)
        const res = await fetch(`http://localhost:4000/api/updatecustomer`,
            {
                method: "POST",
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
                // body: JSON.stringify({ id: data.id, name: data.name, contact: Number.parseInt(data.contact), email: data.email })
            });
        const j = await res.json();
        return j;
    }
    catch (e) { console.error(e); }
}

export const deleteCustomer = async (cid) => {
    try {
        console.log("action delete:::", cid)
        const res = await fetch("http://localhost:4000/api/deletecustomer",
            {
                method: "POST",
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({cid}),
            });
            // console.log("RESP::::::::::",res)
        const j = await res.json();
        return j;
    }
    catch (e) { console.error(e); }
}

export const login = async (data) => {
    try {
        // console.log("ACTION log:",data);
        const res = await fetch("http://localhost:4000/api/login",
            {
                method: "POST",
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
                // body: JSON.stringify({ id: data.id, name: data.name, contact: Number.parseInt(data.contact), email: data.email })
            });

        const j = await res.json();
        console.log("RESPONSE::::", j);
        // console.log("LOGIN response",response)
        return j;
        // if (j.success===false) return false; else return true;
    }
    catch (e) { console.error(e); }
}

export const fetchCustomers = async () => {
    try {
        const res = await fetch("http://localhost:4000/api/fetchcustomers",
            {
                method: "GET",
            });

        const j = await res.json();
        return j;
    }
    catch (e) { console.error(e); }
}