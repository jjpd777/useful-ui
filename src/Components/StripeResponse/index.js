import React, { useState, useEffect } from "react";
import { Table, Badge, SideSheet,Paragraph} from 'evergreen-ui';
import { moneyFormatter } from "../../Utils/MoneyFormat";
import Revenue from "../../Utils/Cartoons/happy-revenue-logo.png";
import SaldadaColor from "../../Utils/saldada-color.png";

import { Layout, Divider, Col, Button, Card, Statistic } from 'antd';
import {
    FileOutlined, SettingOutlined, EditOutlined, EllipsisOutlined,
    CheckCircleOutlined, CloudDownloadOutlined, MailOutlined, WhatsAppOutlined, DollarCircleFilled, DollarCircleOutlined
  } from '@ant-design/icons';
import 'antd/dist/antd.css';

const {  Footer } = Layout;


export default function StripeResponse(){
    const {Meta}= Card;
    return(
        <div className="div-stripe-resp">
        <Card
        className="successful-pymnt"
        style={{marginRight: "100px"}}
        cover={
        <img
            className="stripe-resp-img"
            alt="example"
            src={Revenue}
        />
        }

    >

        <h2>¡Felicidades! Pago exitoso. </h2>
        <Meta
        description={"Recibirás un email con la confirmación."}
        />
                <br></br>
        <CheckCircleOutlined className="checked" style={{color:"green", fontSize:'45px'}}/>
        <br></br>
        <br></br>
       
        </Card>
        <Card
        className="successful-pymnt"
        title= "Transacción exitosa"
        extra={<a>txn49126680302f42</a>}
        actions={[
            <CloudDownloadOutlined key="setting" style={{fontSize: '25px'}}/> ,
            <MailOutlined key="ellipsis" style={{fontSize: '25px'}} />,
            <WhatsAppOutlined key="sdf" style={{fontSize: '25px'}} />,
          ]}
        >
        <div>
            <Statistic prefix={<DollarCircleOutlined style={{color:"green"}}/>} title= {""} value={47965.87} />
        </div>
        <br></br>
        <h4><b>Método de pago:</b> Tarjeta de débito</h4>
        <h4><b>Fecha de pago</b> 01/14/2022</h4>
        <h4><b>Vendedor: </b> Alejandro </h4>
        <h4><b>Comprador: </b> Juan Palacio</h4>
        <h4><b>Tipo de transacción: </b> pago único</h4>


          <Divider/>

        <Footer style={{ textAlign: 'center', marginTop:"20px" }}>asegurado por           
        <img src={SaldadaColor} style={{width: '13%'}}></img></Footer>

       

</Card>
</div>
    )
}