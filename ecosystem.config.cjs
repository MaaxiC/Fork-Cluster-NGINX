module.exports = {
    apps: [
      {
        name: "Server-Fork",
        script: "src/index.js",
        watch: true,
        env: {
          PORT: 8080,
        },
      },
      {
        name: "Server-Cluster",
        script: "src/index.js",
        watch: true,
        env: {
          PORT: 8081,
        },
        exec_mode: "cluster",
      },
      {
        name: "Server-Cluster1",
        script: "src/index.js",
        watch: true,
        env: {
          PORT: 8082,
        },
        exec_mode: "cluster",
      },
      {
        name: "Server-Cluster2",
        script: "src/index.js",
        watch: true,
        env: {
          PORT: 8083,
        },
        exec_mode: "cluster",
      },
      {
        name: "Server-Cluster3",
        script: "src/index.js",
        watch: true,
        env: {
          PORT: 8084,
        },
        exec_mode: "cluster",
      },
      {
        name: "Server-Cluster4",
        script: "src/index.js",
        watch: true,
        env: {
          PORT: 8085,
        },
        exec_mode: "cluster",
      },
    ],
  };
  