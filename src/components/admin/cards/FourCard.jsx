import React, { useEffect, useState } from 'react'
import {UsersRound, Mailbox, Glasses} from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../ui/card";
import axios from '../../../lib/axios';

export const FourCard = () => {
  const [totalP, setTotalP] = useState(0);
  const [totalO, setTotalO] = useState(0);
  const [totalC, setTotalC] = useState(0);
  const [totalU, setTotalU] = useState(0);

  useEffect(() => {
    (async () => {
        try {
            const response = await axios.get('/total/product');
            setTotalP(response.data.total);
            console.log(response.data.total);
        } catch (error) {
            console.error('Erreur lors de la récupération du total des produits :', error);
        }
    })();
}, []);

useEffect(() => {
  (async () => {
    try {
        const response = await axiosUser.get('/total/user');
        setTotalU(response.data.total);
        console.log(response.data.total);
    } catch (error) {
        console.error('Erreur lors de la récupération du total des users :', error);
    }
})();
}, []);

  useEffect(() => {
    (async () => {
        try {
            const response = await axiosUser.get('/total/order');
            setTotalO(response.data.total);
            console.log(response.data.total);
        } catch (error) {
            console.error('Erreur lors de la récupération du total des produits :', error);
        }
    })();
}, []);

useEffect(() => {
  (async () => {
    try {
        const response = await axiosUser.get('/total/client');
        setTotalC(response.data.total);
        console.log(response.data.total);
    } catch (error) {
        console.error('Erreur lors de la récupération du total des produits :', error);
    }
})();
}, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 justify-between items-center w-full gap-2">
       <Card className="h-[100%] w-[100%]">
      <CardHeader className="flex flex-row justify-between items-center">

        <h2 className="text-xl">Clients</h2>
        <UsersRound strokeWidth={1.5} />
      </CardHeader>
      <CardContent className="flex flex-row justify-between items-center">
        <div>

          <p className="text-lg">Total Clients</p>
          <CardDescription>
          {totalC} Client
          </CardDescription>
        </div>

      </CardContent>
    </Card>

    <Card className="h-[100%] w-[100%]">
      <CardHeader className="flex flex-row justify-between items-center">

        <h2 className="text-xl">Orders</h2>
        <Mailbox strokeWidth={1.5} />
      </CardHeader>
      <CardContent className="flex flex-row justify-between items-center">
        <div>
          <p className="text-lg">Total Orders</p>
          <CardDescription>
          {totalO} Order
          </CardDescription>
        </div>

      </CardContent>
    </Card>

    <Card className="h-[100%] w-[100%]">
      <CardHeader className="flex flex-row justify-between items-center">
        <h2 className="text-xl">Products</h2>
        <Glasses strokeWidth={1.5} />
      </CardHeader>
      <CardContent className="flex flex-row justify-between items-center">
        <div>
          <p className="text-lg">Total Products</p>

          <CardDescription>
            {totalP} Product
          </CardDescription>
        </div>

      </CardContent>
    </Card>

    <Card className="h-[100%] w-[100%]">
      <CardHeader className="flex flex-row justify-between items-center">
        <h2 className="text-xl">Users</h2>
        <UsersRound strokeWidth={1.5} />
      </CardHeader>
      <CardContent className="flex flex-row justify-between items-center">
        <div>
          <p className="text-lg">Total Users</p>
          <CardDescription>
          {totalU} Users
          </CardDescription>
        </div>

      </CardContent>
    </Card>
  </div>
  )
}


