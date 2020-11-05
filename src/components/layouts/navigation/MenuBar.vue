<template>
  <v-menu v-model="menu" :close-on-content-click="false" offset-Y>
    <template v-slot:activator="{ on }">
      <v-btn icon large v-on="on">
        <v-avatar size="32px" item>
          <v-img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="Vuetify"
          />
        </v-avatar>
      </v-btn>
    </template>

    <v-card>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>
              {{ loginUserName }}
            </v-list-item-title>
            <v-list-item-subtitle>
              Client
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-item>
          <v-list-item-title>
            <v-icon>build</v-icon> Settings
          </v-list-item-title>
        </v-list-item>

        <!-- <v-list-item @click="logout">
          <v-list-item-title>
            <v-icon>power_settings_new</v-icon> Logout
          </v-list-item-title>
        </v-list-item> -->
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    loginUserName: "Allen Jack",
    menu: false
  })
};
</script>
