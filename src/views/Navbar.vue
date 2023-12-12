<template>
  <div>
    <form @submit.prevent="ajouterUtilisateur">
      <label for="name">Nom:</label>
      <input type="text" v-model="user.name" required>

      <label for="email">Email:</label>
      <input type="email" v-model="user.email" required>

      <label for="password">Mot de passe:</label>
      <input type="password" v-model="user.password" required>

      <label for="photo">Photo:</label>
      <input type="file" @change="handleFileChange" accept="image/*" required>

      <button type="submit">Ajouter Utilisateur</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        photo: null,
      },
    };
  },
  methods: {
    handleFileChange(event) {
      this.user.photo = event.target.files[0];
    },
    ajouterUtilisateur() {
      // Appeler la fonction Axios pour ajouter l'utilisateur
      // Utilisez FormData pour envoyer les données avec le fichier
      let formData = new FormData();
      formData.append('name', this.user.name);
      formData.append('email', this.user.email);
      formData.append('password', this.user.password);
      formData.append('photo', this.user.photo);

      axios.post('/api/utilisateurs', formData)
        .then(response => {
          console.log('Utilisateur ajouté avec succès', response.data);
          // Réinitialiser le formulaire ou faire d'autres actions nécessaires
        })
        .catch(error => {
          console.error('Erreur lors de l\'ajout de l\'utilisateur', error);
        });
    },
  },
};
</script>
