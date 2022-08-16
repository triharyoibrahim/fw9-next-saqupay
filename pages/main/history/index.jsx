import React from 'react'
import Head from "next/head"
import { Button, Container, Row, Col } from "react-bootstrap";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Menu from "../../../components/Menu";
import cookies from "next-cookies";
import axios from "../../../helpers/axiosServer";
import Image from "next/image";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  console.log(context)
  try {
    const dataCookie = cookies(context);
    const params = context.query;
    const keyFilter = params.filter ? params.filter : " ";
    const keyPage = !params.page ? 1 : params.page <= 1 ? 1 : params.page;
    const result = await axios.get(`transaction/history?page=${keyPage}&limit=5&filter=${keyFilter}`, {
      headers: {
        Authorization: `Bearer ${dataCookie.token}`,
      },
    });
    return {
      props: {
        data: result.data ? result.data : {},
      },
    };
  } catch (error) {
    
    return {
     
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }
}
function History(props) {
  console.log(props.data.data);
  const router = useRouter();
  const [filter, setFilter] = useState({});
  const [page, setPage] = useState(1);

  const handleFilter = async (e) => {
    setFilter(e.target.value);
    console.log(filter);
    router.push(`/main/history?page=${page}&filter=${filter}`);
  };
  const handlePageUp = (e) => {
    e.preventDefault();
    setPage(page + 1);
    if (page < 1) {
      setPage(1);
    }
    router.push(`/main/history?page=${page}&filter=`);
  };

  const handlePageDown = (e) => {
    e.preventDefault();
    setPage(page - 1);
    if (page < 1) {
      setPage(1);
    }
    router.push(`/main/history?page=${page}&filter=`);
  };

  return (
      <>
      <Head><title>Transaction History</title></Head>
      <Navbar />
      <div className="P-2">-</div>
      <main>
        <Container>
          <Row>
            <Col xs={3}>
              <Menu />
            </Col>

            <Col xs={9}>
          <div className="graphic d-flex-column px-3 px-md-4 pt-3 pt-md-4 mt-3">
              <p>Transaction History</p>
              <select className="history__filter" defaultValue="" onClick={handleFilter}>
                      <option selected value="">
                        ---Select Filter---
                      </option>
                      <option value="WEEK">WEEKLY</option>
                      <option value="MONTH">MONTHLY</option>
                      <option value="YEAR">ANUAL</option>
                    </select>
             </div>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default History