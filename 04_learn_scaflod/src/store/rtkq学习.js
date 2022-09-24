import { build } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/cacheLifecycle'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'


const studentApi =  createApi({
  reducerPath:"studentApi" ,  //API标志,不和其他API,reducer重复
  baseQuery:fetchBaseQuery({baseUrl:"http://xxxxx", }),
  endpoints(){
      return {
        getStudents:build.query({
          query() {
            return "students "
          }
        }),
        
      }
    }
})