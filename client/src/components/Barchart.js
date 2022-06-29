import React, { useEffect,useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
} from "recharts";

export default function Barchart (){
const [data,setData]=useState();
const arr={};

useEffect(() => {

  getData(arr);
});

 const  getData = (arr) => {


     arr = {
      metadata: {
        id: "36a061ac-124f-40f8-b0b0-211914ce6696",
        created: "2022-06-28T10:35:27.111001Z",
        last_accessed: "2022-06-28T12:10:27.302762Z",
        iban: "FI347283230412374920",
        institution_id: "S_PANKKI_SBANFIHH",
        status: "READY",
      },
      balances: {
        balances: [
          {
            balanceAmount: {
              amount: "130000.94",
              currency: "EUR",
            },
            balanceType: "interimBooked",
          },
          {
            balanceAmount: {
              amount: "129990.44",
              currency: "EUR",
            },
            balanceType: "interimAvailable",
          },
        ],
      },
      details: {
        account: {
          resourceId: "b75272f6-aed1-11ec-9b6b-23460c492eb8",
          iban: "FI347283230412374920",
          currency: "EUR",
          ownerName: "DINATALE NATHAN",
          product: "CurrentAccount",
          usage: "PRIV",
        },
      },
      transactions: {
        transactions: {
          booked: [
            {
              bankTransactionCode: "CCRD-POSD",
              bookingDate: "2022-06-28",
              creditorName: "Backerei Wimmer Fil.73",
              proprietaryBankTransactionCode: "KOO",
              transactionAmount: {
                amount: "-1.70",
                currency: "EUR",
              },
              transactionId: "20220628392990685503",
            },
            {
              bankTransactionCode: "CCRD-POSD",
              bookingDate: "2022-06-28",
              creditorName: "Flgh .Muenchen MyDutyFree",
              proprietaryBankTransactionCode: "KOO",
              transactionAmount: {
                amount: "-10.50",
                currency: "EUR",
              },
              transactionId: "20220628392990695777",
            },
            {
              bankTransactionCode: "CCRD-POSD",
              bookingDate: "2022-06-28",
              creditorName: "Backerei Wimmer Fil.73",
              proprietaryBankTransactionCode: "KOO",
              transactionAmount: {
                amount: "-11.80",
                currency: "EUR",
              },
              transactionId: "20220628392990685507",
            },
            {
              bankTransactionCode: "CCRD-POSD",
              bookingDate: "2022-06-28",
              creditorName: "Wolt",
              proprietaryBankTransactionCode: "KOO",
              transactionAmount: {
                amount: "-18.60",
                currency: "EUR",
              },
              transactionId: "20220628392990658480",
            },
            {
              bankTransactionCode: "CCRD-POSD",
              bookingDate: "2022-06-27",
              creditorName: "FR LOsteria SE",
              proprietaryBankTransactionCode: "KOO",
              transactionAmount: {
                amount: "-25.35",
                currency: "EUR",
              },
              transactionId: "20220627392993128357",
            },
            {
              bankTransactionCode: "CCRD-POSD",
              bookingDate: "2022-06-27",
              creditorName: "DB Automaten",
              proprietaryBankTransactionCode: "KOO",
              transactionAmount: {
                amount: "-9.00",
                currency: "EUR",
              },
              transactionId: "20220627392991642858",
            },
            {
              bankTransactionCode: "CCRD-POSD",
              bookingDate: "2022-06-27",
              creditorName: "FC Bayern World Weinstras",
              proprietaryBankTransactionCode: "KOO",
              transactionAmount: {
                amount: "-14.95",
                currency: "EUR",
              },
              transactionId: "20220627392991432496",
            },
            {
              bankTransactionCode: "CCRD-POSD",
              bookingDate: "2022-06-27",
              creditorName: "TAMBOSI H'ugo's GmbH",
              proprietaryBankTransactionCode: "KOO",
              transactionAmount: {
                amount: "-50.00",
                currency: "EUR",
              },
              transactionId: "20220627392991591092",
            },
            {
              bankTransactionCode: "CCRD-POSD",
              bookingDate: "2022-06-27",
              creditorName: "HSL Mobiili",
              proprietaryBankTransactionCode: "KOO",
              transactionAmount: {
                amount: "-2.50",
                currency: "EUR",
              },
              transactionId: "20220627392991498154",
            },
            {
              bankTransactionCode: "CCRD-POSD",
              bookingDate: "2022-06-27",
              creditorName: "OAK BARREL 3013007",
              proprietaryBankTransactionCode: "KOO",
              transactionAmount: {
                amount: "-10.00",
                currency: "EUR",
              },
              transactionId: "20220627392991776276",
            },
            {
              bankTransactionCode: "CCRD-POSD",
              bookingDate: "2022-06-27",
              creditorName: "Verwaltung der Residenz M",
              proprietaryBankTransactionCode: "KOO",
              transactionAmount: {
                amount: "-16.00",
                currency: "EUR",
              },
              transactionId: "20220627392991431975",
            },
          ],
          pending: [],
        },
      },
    };

    var ar = arr.transactions.transactions.booked;

    const minDate = new Date(
      Math.min(
        ...ar.map((element) => {
          return new Date(element.bookingDate);
        })
      )
    );

    const maxDate = new Date(
      Math.max(
        ...ar.map((element) => {
          return new Date(element.bookingDate);
        })
      )
    );
  
    ar.forEach((item) => {
      item.transactionAmount.amount = Math.abs(item.transactionAmount.amount);
    });

    const minArray = ar.filter((item) => {
      var s = new Date(item.bookingDate);

      return s.getTime() == minDate.getTime();
    });
    const maxArray = ar.filter((item) => {
      var s = new Date(item.bookingDate);

      return s.getTime() == maxDate.getTime();
    });
return arr
  };

const objData=getData().transactions.transactions.booked;

    return (
      <div className="BarChart">
     

        <ResponsiveContainer width="100%" aspect={2}>
          <BarChart
            data={objData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="bookingDate" />
            <YAxis dataKey="transactionAmount.amount" />
            <Tooltip />
            <Bar
              type="monotone"
              dataKey="transactionAmount.amount"
              fill="#ffc658"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  
}
