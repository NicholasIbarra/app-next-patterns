import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Post = {
  id: number;
  title: string;
  body: string;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com"
  }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "/posts?_limit=5",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Posts" as const, id })),
              { type: "Posts", id: "LIST" }
            ]
          : [{ type: "Posts", id: "LIST" }]
    })
  })
});

export const { useGetPostsQuery } = baseApi;
