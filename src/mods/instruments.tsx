import { TdClient } from "@/api/td";
import React, { useEffect, useState } from "react"

import { Table } from "antd";
import { ColumnsType } from "antd/es/table";

interface InstrumentsBoardProps {
  tdClient: TdClient;
}

interface SimpleInstrumentType {
  InstrumentID: string;
  ExchangeID: string;
  ProductID: string;
  ExchangeInstID: string;
}

const InstrumentsBoard: React.FC<InstrumentsBoardProps> = (props: InstrumentsBoardProps) => {
  const [instruments, setInstruments] = useState<object[]>([]);
  props.tdClient.OnRspQryInstrument = (data: any) => {
    console.log(data.Instrument?.InstrumentID);
    let newInstrument = instruments.filter((instrument: any) => instrument.InstrumentID === data.Instrument?.InstrumentID).length == 0;
    if (newInstrument) {
      setInstruments([...instruments, data.Instrument]);
    }
  };

  useEffect(() => {
    props.tdClient.reqQryInstrument("SHFE", "", "", "");
  }, []);

  const columns: ColumnsType<SimpleInstrumentType> = [
    {
      title: "InstrumentID",
      dataIndex: "InstrumentID",
      width: 50
    },
    {
      title: "ExchangeID",
      dataIndex: "ExchangeID",
      width: 50
    },
    {
      title: "ProductID",
      dataIndex: "ProductID",
      width: 50
    }
  ]
  // Extract all the instrumentIDs from the instruments array and return them with li tag
  const instrumentsList: SimpleInstrumentType[] = instruments.map((instrument: any) => {
    return {
      InstrumentID: instrument.InstrumentID,
      ExchangeID: instrument.ExchangeID,
      ProductID: instrument.ProductID,
      ExchangeInstID: instrument.ExchangeInstID
    }
  });

  return (
    <Table rowKey={"InstrumentID"} columns={columns} dataSource={instrumentsList} pagination={false} scroll={{y: 300}}/>
  )
}

export default InstrumentsBoard;
