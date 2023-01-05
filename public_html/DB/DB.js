let posts = [
    {
        id:1,
        title: 'Title 1',
        descp: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi at ullam tempore quo voluptatibus. Quam quibusdam in dolorum placeat nam magni. Optio beatae deleniti laborum reiciendis distinctio possimus eveniet fugit.',
        img: 'https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
        date: Date()
    },
    {
        id:2,
        title: 'Title 2',
        descp: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi at ullam tempore quo voluptatibus. Quam quibusdam in dolorum placeat nam magni. Optio beatae deleniti laborum reiciendis distinctio possimus eveniet fugit.',
        img: 'https://i.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ',
        date: Date()
    },
    {
        id:3,
        title: 'Title 3',
        descp: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi at ullam tempore quo voluptatibus. Quam quibusdam in dolorum placeat nam magni. Optio beatae deleniti laborum reiciendis distinctio possimus eveniet fugit.',
        img: 'https://i.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI',
        date: Date()
    },
    {
        id:4,
        title: 'Title 4',
        descp: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi at ullam tempore quo voluptatibus. Quam quibusdam in dolorum placeat nam magni. Optio beatae deleniti laborum reiciendis distinctio possimus eveniet fugit.',
        img: 'https://i.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA',
        date: Date()
    },
    {
        id:5,
        title: 'Title 5',
        descp: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi at ullam tempore quo voluptatibus. Quam quibusdam in dolorum placeat nam magni. Optio beatae deleniti laborum reiciendis distinctio possimus eveniet fugit.',
        img: 'https://i.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU',
        date: Date()
    },
    {
        id:6,
        title: 'Title 6',
        descp: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi at ullam tempore quo voluptatibus. Quam quibusdam in dolorum placeat nam magni. Optio beatae deleniti laborum reiciendis distinctio possimus eveniet fugit.',
        img: 'https://i.picsum.photos/id/19/2500/1667.jpg?hmac=7epGozH4QjToGaBf_xb2HbFTXoV5o8n_cYzB7I4lt6g',
        date: Date()
    },
]

function getAllposts(searchTerm){
    if(!searchTerm){
        return posts;
    }
    else{
        return posts.filter( post => post.title.toLowerCase().includes(searchTerm) || post.descp.toLowerCase().includes(searchTerm))
    }
}

function getSinglePost(id){
    return posts.find ( (post) => post.id == id );
}

function addPost(data){
    posts.push({...data,id : posts.length+1});
}

function deletePost(id){
    posts = posts.filter((post) => post.id !== id );
}

module.exports = { getAllposts, getSinglePost, addPost, deletePost};