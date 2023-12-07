<template>
  <div>
    <h2>User Details</h2>
    <div v-if="user && albums">
      <h3>{{ user.name }}</h3>
      <p><strong>Username:</strong> {{ user.username }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>City:</strong> {{ user.address.city }}</p>
      <p><strong>Website:</strong> {{ user.website }}</p>
      <p><strong>Company:</strong> {{ user.company.name }}</p>

      <h4>Albums</h4>
      <ul>
        <li v-for="album in albums" :key="album.id">
          {{ album.title }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Loading user details...</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'
import { users } from '../api';

export default {
  setup(props) {
    const userId = ref(null);
    const route = useRoute();
    const user = ref(null);
    const albums = ref([]);

    const fetchUserDetails = async () => {
      try {
        // Fetch user details
        user.value = await users.getDetails(userId.value);

        // Fetch user albums
        albums.value = await users.getAlbums(userId.value);


      } catch (error) {
        console.error('Error fetching user details', error);
      }
    };

    onMounted(() => {
      userId.value = route.params.id;
      fetchUserDetails();
    });

    return {
      user,
      albums
    };
  },
};
</script>