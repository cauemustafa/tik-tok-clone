import './App.css';
import Video from './pages/Video';

const videos = [
  {
    likes: 300,
    comments: 144,
    shares: 42,
    username: 'paulosantos2058',
    description: 'gato goleiro',
    music: 'trilha sonora épica',
    url:
      'https://firebasestorage.googleapis.com/v0/b/jornada3-a7924.appspot.com/o/brecker2.mp4?alt=media&token=5493f40a-3b0d-4c19-b5dd-a9016cc5a6d1',
  },
  {
    likes: 55,
    comments: 10,
    shares: 7,
    username: 'paulosantos2058',
    description: 'gatinho fofo',
    music: 'clap your hands 180bpm',
    url:
      'https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4',
  },
];

function App() {
  return (
    <div className="App">
      <section className="app__videos">
        {videos.map((video) => (
          <Video
            likes={video.likes}
            comments={video.comments}
            shares={video.shares}
            username={video.username}
            description={video.description}
            music={video.music}
            url={video.url}
          />
        ))}
        {/* bug! Sidebar está sobrepondo sobre o primeiro componente de video */}
      </section>
    </div>
  );
}

export default App;
