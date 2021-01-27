const names = ["Emo Song", "Dye It Red", "Enlacing", "Further Away", "Hapi (with Benji. & EARTHGANG feat. Mereba, Big Rube)", "Just A Cow", "Vape Nation", "Holding a Loaded Gun", "Back To Mars", "Edward 40hands", "Together", "Bad Habit", "justacow (demo3)", "How Was Your Day?", "Charlie Brown", "Trying Soda (I Know You so Well)", "Sorry", "Nice to See You", "Grow As We Go", "North", "Tell Me Why I'm Waiting", "JUNKY", "Summertime In Paris", "Wild World", "Jupiter (with Mereba & JID feat. EARTHGANG, Jurdan Bryant, Hollywood JB & Benji.)", "Telescope", "Sunny Duet (feat. the Mind)", "Care", "Typical Story", "Be an Astronaut", "Sola", "Alewife", "Worth It", "Going Gets Tough", "Leaves", "Horen Sarrison", "Emily", "Chewin' the Apple of Yer Eye", "Looking Out for You", "Lost With You", "Circles", "January", "I Get Overwhelmed", "Kilby Girl", "Happen To Me", "You Belong With Me", "Pristine", "Empire State Of Mind", "Gigachad Jawline", "In Luv with U"]
const artists = ["beabadoobee", "beabadoobee", "clipping.", "beabadoobee", "Spillage Village", "Deal Casino", "Mom Jeans.", "Sawyer Nunes", "beabadoobee", "Mom Jeans.", "beabadoobee", "Ben Platt", "joe p", "beabadoobee", "beabadoobee", "Worst Party Ever", "beabadoobee", "Vansire", "Ben Platt", "Clairo", "bearbare", "BROCKHAMPTON", "Jaden", "Yusuf / Cat Stevens", "Spillage Village", "Cage The Elephant", "Noname", "beabadoobee", "Hobo Johnson", "Declan McKenna", "Jessie Reyez", "Clairo", "beabadoobee", "The Growlers", "joe p", "beabadoobee", "Declan McKenna", "The Flaming Lips", "Joy Again", "Patrick Watson", "Mac Miller", "Verzache", "Dark Rooms", "The Backseat Lovers", "BENEE", "Taylor Swift", "Snail Mail", "JAY-Z", "Frat Mouse", "Finn"]
const energies = [0.77, 0.754, 0.553, 0.586, 0.491, 0.877, 0.0799, 0.509, 0.339, 0.838, 0.838, 0.495, 0.473, 0.392, 0.842, 0.69, 0.389, 0.535, 0.137, 0.632, 0.243, 0.662, 0.86, 0.508, 0.632, 0.481, 0.463, 0.884, 0.935, 0.757, 0.184, 0.329, 0.751, 0.769, 0.899, 0.532, 0.663, 0.522, 0.9, 0.157, 0.0316, 0.246, 0.489, 0.444, 0.645, 0.783, 0.695, 0.956, 0.319, 0.661]
const valences = [0.448, 0.512, 0.0955, 0.294, 0.214, 0.185, 0.729, 0.586, 0.215, 0.37, 0.279, 0.121, 0.647, 0.168, 0.512, 0.311, 0.237, 0.352, 0.437, 0.54, 0.0475, 0.675, 0.289, 0.554, 0.456, 0.176, 0.896, 0.452, 0.645, 0.262, 0.188, 0.264, 0.38, 0.735, 0.625, 0.162, 0.306, 0.398, 0.937, 0.319, 0.37, 0.18, 0.263, 0.225, 0.359, 0.443, 0.294, 0.811, 0.422, 0.239]
const modes = [1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
const danceabilities = [0.409, 0.411, 0.559, 0.497, 0.426, 0.461, 0.633, 0.674, 0.344, 0.426, 0.595, 0.339, 0.584, 0.353, 0.57, 0.527, 0.342, 0.539, 0.458, 0.352, 0.545, 0.638, 0.569, 0.484, 0.653, 0.589, 0.56, 0.513, 0.421, 0.197, 0.575, 0.433, 0.576, 0.502, 0.505, 0.445, 0.556, 0.355, 0.682, 0.373, 0.61, 0.689, 0.321, 0.329, 0.659, 0.687, 0.483, 0.491, 0.62, 0.361]
const tempos = [155.97, 174.003, 130.018, 124.037, 143.724, 84.603, 95.977, 98.955, 105.789, 172.007, 127.042, 134.336, 172.052, 84.586, 126.951, 98.082, 158.003, 78.885, 80.824, 96.929, 140.053, 82.327, 90.937, 151.867, 94.999, 93.568, 155.711, 103.034, 155.855, 144.262, 83.616, 102.971, 103.009, 162.053, 132.932, 131.997, 100.008, 112.425, 100.721, 77.483, 151.964, 87.985, 118.16, 162.279, 149.047, 129.964, 126.212, 173.585, 160.065, 97.595]
const artworks = ["https://i.scdn.co/image/ab67616d0000b273942201cac6bfe1367b017286", "https://i.scdn.co/image/ab67616d0000b273942201cac6bfe1367b017286", "https://i.scdn.co/image/ab67616d0000b273b63780c667c5cc123273294b", "https://i.scdn.co/image/ab67616d0000b273942201cac6bfe1367b017286", "https://i.scdn.co/image/ab67616d0000b273230d88bf27d6ca322fb59eb4", "https://i.scdn.co/image/ab67616d0000b2733a3a8ecef8f51a447ba5fc53", "https://i.scdn.co/image/ab67616d0000b27397a9ba3bceb5c6bd83112a1b", "https://i.scdn.co/image/ab67616d0000b27377210bd6f4e30c785bca57d5", "https://i.scdn.co/image/ab67616d0000b273942201cac6bfe1367b017286", "https://i.scdn.co/image/ab67616d0000b27397a9ba3bceb5c6bd83112a1b", "https://i.scdn.co/image/ab67616d0000b273942201cac6bfe1367b017286", "https://i.scdn.co/image/ab67616d0000b273f77cc81c4679525b9f6b4447", "https://i.scdn.co/image/ab67616d0000b2737b5b02526332d66e983b8ede", "https://i.scdn.co/image/ab67616d0000b273942201cac6bfe1367b017286", "https://i.scdn.co/image/ab67616d0000b273942201cac6bfe1367b017286", "https://i.scdn.co/image/ab67616d0000b2736070817f4f109cfa382e1a08", "https://i.scdn.co/image/ab67616d0000b273942201cac6bfe1367b017286", "https://i.scdn.co/image/ab67616d0000b273c556c8613499c8e465d3ba3c", "https://i.scdn.co/image/ab67616d0000b273f77cc81c4679525b9f6b4447", "https://i.scdn.co/image/ab67616d0000b27333ccb60f9b2785ef691b2fbc", "https://i.scdn.co/image/ab67616d0000b2739aab383aa8ce1e208e096e28", "https://i.scdn.co/image/ab67616d0000b2737d15fb20303a589acc1ab98b", "https://i.scdn.co/image/ab67616d0000b27360ec4df52c2d724bc53ffec5", "https://i.scdn.co/image/ab67616d0000b273409b4acd6ef9f8f05a41466c", "https://i.scdn.co/image/ab67616d0000b273230d88bf27d6ca322fb59eb4", "https://i.scdn.co/image/ab67616d0000b273c707823ed5683c77b37b121d", "https://i.scdn.co/image/ab67616d0000b273e9ef4d0bab9c9bf9ef5d3f36", "https://i.scdn.co/image/ab67616d0000b273942201cac6bfe1367b017286", "https://i.scdn.co/image/ab67616d0000b2733bf723a8f9cb66971812f472", "https://i.scdn.co/image/ab67616d0000b2733a06b188cf0080ce95f662eb", "https://i.scdn.co/image/ab67616d0000b273d673976fd5e81a97c19dd44e", "https://i.scdn.co/image/ab67616d0000b27333ccb60f9b2785ef691b2fbc", "https://i.scdn.co/image/ab67616d0000b273942201cac6bfe1367b017286", "https://i.scdn.co/image/ab67616d0000b273adf0acda31888e0b000d552b", "https://i.scdn.co/image/ab67616d0000b27325343d37a5a30e60e7a2f5d4", "https://i.scdn.co/image/ab67616d0000b273942201cac6bfe1367b017286", "https://i.scdn.co/image/ab67616d0000b2733a06b188cf0080ce95f662eb", "https://i.scdn.co/image/ab67616d0000b2736a80217584484a9372d95b66", "https://i.scdn.co/image/ab67616d0000b273109d227b3d5754e6b45f3124", "https://i.scdn.co/image/ab67616d0000b2736f9595c06a11afbebea121ca", "https://i.scdn.co/image/ab67616d0000b27326b7dd89810cc1a40ada642c", "https://i.scdn.co/image/ab67616d0000b273fb17c93d98cc5f13ab5e85bd", "https://i.scdn.co/image/ab67616d0000b2733eea2fd4aa4287e42d80144e", "https://i.scdn.co/image/ab67616d0000b2738386795a636d72e74c958590", "https://i.scdn.co/image/ab67616d0000b273b02ab5883dac3a3cc85ba549", "https://i.scdn.co/image/ab67616d0000b2737b25c072237f29ee50025fdc", "https://i.scdn.co/image/ab67616d0000b2733179365772a26544d8be0493", "https://i.scdn.co/image/ab67616d0000b273fec1b815bb3c50a64a90fd10", "https://i.scdn.co/image/ab67616d0000b2731ad672a160261afcd79b6701", "https://i.scdn.co/image/ab67616d0000b273d9326c894613b18848c82089", ]
const previews = ["https://p.scdn.co/mp3-preview/c62174743a7bf052268ae934a3f359604367a5c8?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/7671e3f6b5d934e0e9fe25bcf07e6ed7cbad3ffd?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/d717e8b1363febba8a4b662a3e22c91daffe357a?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/1caa36b6057cde58bbd9f069cca936af85e81e24?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/6022ff178b85f5f4e77db71142b25fa37c14decc?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/32df85e76d0c96b40e56dd78b0e248510187ba4d?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/3aae2fb757432bf020682f6b6d57687e6ec36744?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/e768addd021317b04aa0cfc26f4044468380f285?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/e3ebd27b6ea8eb62dcddbeecb73495d7a8685558?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/61c6b4ac939bf0df9f78baa3b64a35d4f79bddd9?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/e8331527fd332d4ab334ebbbb0128c1938dec99a?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/6f8cb6a43a6881d94503231d046955c5d9259d13?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/967b2dd8ecb3827a5f1d082806527604d900e99b?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/0468a9239e1bd591374e0087c2b8ea44be0c9689?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/6865ff4d4d3035f28d656679a1b544ab1798f645?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/fbfd51526da1c88936d116849a5b0fd7a174bbd3?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/f4e3e0944d58229213ea55a9938f386b9c08b154?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/2c923679b08122fe91990bf621ed4fc941973483?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/ef89ad6d8da7b7a6be355d88e7728a9ccfdc15d3?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/d9dad65a188449c85894235bb56571250d5ef14a?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/aea7960f9eea9ec33a2892bfda0485014fc86e05?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/fc267919aa14b11c716b709f167d60650aec9a68?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/f21ee718f7fbf35f2adaae6fe4d3e88141bbd913?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/e17e6ad85c4fd8517e1bd705a28ee0c21bab8f97?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/e588128aacd748c5161b0be223c7440d5a4879d0?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/c74ac6a723d6a8029902f6cb13c0f7784058ac92?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/6be8beccf3a9d6ef131c0d85b8566cf7b6130241?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/978b4430cf174dd8a2537c36bd7276626703e994?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/168d89a56bc314ab7a449fae5ba634d5c0384284?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/215ef8eb5a1c28ef5cc4780fcf7f8db5d005aa4a?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/00e94962a266fc737bd3a40fabb367c0b8e07aae?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/fb88be85a5ffdb4ceccfd052d6b9474dc7eefb39?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/af329f1f7c376a15e77d54cabf7000e54dc6876f?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/7c4ce98e614255c071900c8b6526fb64154c86c9?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/9427427f9471d6b5fc324ba3d59d03332bccc134?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/6443e59798707cf56f71fbb49a0b58401c073b23?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/8348b730f4bb28d062263bc1f7f36ae3e3eb3140?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/20dd46e6c4e2d25a0da295ab9eb69b730328dd47?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/a89d193fa7ac82f9747a1cbf8da6596a73e10c71?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/e6f7c28b686361e7f8e7f24656a7971ca89589c5?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/54e25fcb70b997c57b112c74fc0e5505382a96e9?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/3438419ecb4374a2749b400c3298b5b79b604ce2?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/fca4a58b78ba20f6b98c12e6cbace2192b69331f?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/5108b581e89bc1ba84cad1601d0e7124e9aca634?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/7ef6e319d0a05649fdfbd33111f826aebc42207b?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/ee15df7d34961f7ec96201a292ee96769e68f237?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/b97f8fe32a38250728b8e4164bd4aca6eee48491?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/cba78eef2d2679b9babb985ed0ad4f85bdf52f54?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/d827855c32da4860f5d8f19a545adf26ab39280b?cid=774b29d4f13844c495f206cafdad9c86", "https://p.scdn.co/mp3-preview/706ac2b63fd29ec20c58956a05c3fe24a24058eb?cid=774b29d4f13844c495f206cafdad9c86", ]
