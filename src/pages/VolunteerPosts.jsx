import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import axios from "axios";


const VolunteerPosts = () => {
    

 
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState('')
  const [search, setSearch] = useState('')
  const [searchText, setSearchText] = useState('')
  const [posts, setPosts] = useState([])

    useEffect(() => {
      const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/posts`)
        setPosts(data)
      }
      getData()
    }, [])

    useEffect(() => {
      const getData = async () => {
        const { data } = await axios(
          `${
            import.meta.env.VITE_API_URL
          }/all-posts?filter=${filter}&sort=${sort}&search=${search}`
        )
        setPosts(data)
      }
      getData()
    }, [ filter, search, sort])

    const handleReset = () => {
      setFilter('')
      setSort('')
      setSearch('')
      setSearchText('')
    }



    const handleSearch = e => {
      e.preventDefault()
  
      setSearch(searchText)
    }

    return (
      <div className='container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between'>
        <div>
          <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
            <div>
              <select
               onChange={e => {
                setFilter(e.target.value)                
              }}
              value={filter}
                name='category'
                id='category'
                className='border p-4 rounded-lg'
              >
                <option value=''>Filter By Category</option>
                <option>Healthcare</option>
                  <option>Education</option>
                  <option>Social service</option>
                  <option>Animal welfare</option>
                  <option>Environment</option>
                  <option>Senior care</option>
                  <option>Community development</option>
              </select>
            </div>
  
            <form onSubmit={handleSearch}>
              <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                <input
                  className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                  type='text'
                  onChange={e => setSearchText(e.target.value)}
                value={searchText}
                  name='search'
                  placeholder='Enter Job Title'
                  aria-label='Enter Job Title'
                />
  
                <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                  Search
                </button>
              </div>
            </form>
            <div>
              <select
              onChange={e => {
                setSort(e.target.value)
                
              }}
              value={sort}
                name='category'
                id='category'
                className='border p-4 rounded-md'
              >
                <option value=''>Sort By Deadline</option>
                <option value='dsc'>Descending Order</option>
                <option value='asc'>Ascending Order</option>
              </select>
            </div>
            <button onClick={handleReset} className='btn'>Reset</button>
          </div>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3'>
          { posts?.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
                  </div>


          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {/* {jobs.map(job => (
              <JobCard key={job._id} job={job} />
            ))} */}
          </div>
        </div>
  
       
      </div>
    )
};

export default VolunteerPosts;