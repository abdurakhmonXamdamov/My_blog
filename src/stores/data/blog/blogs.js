import { api } from '@/helpers/api'
import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { notifStore } from '../notIF'

export const blogStore = defineStore('blogStore', () => {

  const url = 'api/blog'
  const notif_Store = notifStore()

  const blog = reactive({
    blogs: [],
    count: 0,
    default: {}
  })

  const fetchBlogs = async (endpoint) => {
    try {
      const { data } = await api.get(`${url}/${endpoint}`);
      console.log(`Blogs from ${endpoint}: `, data);
      return data; 
    } catch (error) {
      console.error(`Error fetching blogs from ${endpoint}: `, error);
      throw error; 
    }
  };

  const allBlogs = async () => {
    try {
      const data = await fetchBlogs('all');
      blog.blogs = data.blogs;
      blog.count = data.count;
    } catch (error) {
      console.error('Error fetching all blogs:', error);
    }
  };
  
  const allMyBlogs = async () => {
    try {
      const data = await fetchBlogs('my');
      blog.blogs = data.blogs;
      blog.count = data.count;
    } catch (error) {
      console.error('Error fetching user blogs:', error);
    }
  };

  const createBlogs = async (createLog) => {
      try {
        const {data} = await api.post(`${url}/create`, createLog)
        blog.blogs = [data, ...blog.blogs]
        blog.count += 1
        notif_Store.setNotif({
          title: 'Yangi blog qo\'shildi',
          status: 'success',
        })
      }catch(err){
        if(err){
          console.log("...");
        }
      }
  }

  const getBlogs  = async (id) => {
    return await api.get(`${url}/findone/${id}`)
  }


  const deleteBlogs = async (id) => {
    await api.delete(`${url}/delete/${id}`)
    notif_Store.setNotif({
      title: 'Blog o\'chirildi',
      status: 'error',
    })

    blog.blogs = blog.blogs.filter(item => item._id !== id)
    blog.count -= 1
  }

  const updateBlogs = async (update) => {
    const { data } = await api.put(url, update)
    blog.blogs = blog.blogs.map(item => {
      if(item._id == data._id) return data
        return item
    })

    notif_Store.setNotif({
      title: 'Holat yangilandi',
      status: 'success'
    })
  }

  const saveBlogs = async (update) => {
    const { data } = await api.put(url, update)
    blog.blogs = blog.blogs.map(item => {
      if(item._id == data._id) return data
        return item
    })

    notif_Store.setNotif({
      title: 'Blog yangilandi',
      status: 'success'
    })
  }

  return {
    blog,


    allBlogs,
    createBlogs,
    getBlogs,
    deleteBlogs,
    updateBlogs,
    saveBlogs,
    allMyBlogs
  }

})
