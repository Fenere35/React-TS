import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import type { ColumnsType } from 'antd/es/table'; 
import { Table, Button } from 'antd'; 
 
 
interface DataType { 
  country: string; 
  name: string; 
}
 

const columns: ColumnsType<DataType> = [ 
  { 
    title: 'Страна', 
    dataIndex: 'country', 
    key: 'country', 
  }, 
  { 
    title: 'Название школы', 
    dataIndex: 'name', 
    key: 'name', 
  }
]; 
 
 
const TablePagination: React.FC = () => { 
  const [page, setPage] = useState<number>(1); 
  const [dataSource, setDataSource] = useState<DataType[]>([]); 
 
  const getUniversity = async (page: number, limit: number) => { 
    try { 
 
      const offset = (page - 1) * limit; 
      const response = await axios.get( 
        `http://universities.hipolabs.com/search?offset=${offset}&limit=${limit}`
      ); 
      setDataSource(response.data); 
    } catch (error) { 
      console.error('Error fetching data:', error); 
    } 
  }; 
 
  useEffect(() => { 
    getUniversity(page, 10); 
 
  }, [page]); 
 
  return ( 
    <> 
      <Table dataSource={dataSource} columns={columns} pagination={false} /> 
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}> 
        Назад 
      </Button> 
      <Button onClick={() => setPage(page + 1)}> 
        Вперед 
      </Button> 
      <p>{page}</p>
    </> 
  ); 
} 
 
export default TablePagination;