<script lang="ts">
	import '$lib/styles/app.css';

	const skills = ['JavaScript', 'Python', 'Node', 'React', 'Svelte', 'Vue', 'Next', 'C++'];
	const hobbies = ['badminton 🏸', 'Music 🎶', 'Gym 🏋🏾‍♀️','Valorant 👾']

	let light = 'true';

	const change_mode = () => {
		console.log(light)
		const html = document.querySelector('html') as HTMLElement;
		if (light === "true"){html.dataset.theme="light"}
		else if (light === "false"){html.dataset.theme="dark"}

	}
</script>

<div class="container lg:w-3/4 h-screen mx-auto flex flex-col justify-center p-3">
	<div
		class="w-full mx-auto h-[40%] lg:w-[90%] border border-2 bg-gradient-to-r from-blue-750 to-indigo-900"
	>
		<!-- tool bar -->
		<div class="w-full h-[8%] bg-slate-400 items-center flex">
			<div class="flex w-1/6 justify-evenly">
				<div class="w-4 h-4 bg-red-300 rounded-full" />
				<div class="w-4 h-4 bg-yellow-300 rounded-full" />
				<div class="w-4 h-4 bg-green-300 rounded-full" />
			</div>
		</div>
		<!-- Code -->
		<div class="flex h-[92%] justify-center items-center bg-black">
			<code class="w-5/6 m-auto">
				<div>
					<span class="text-white">const</span>
					<span class="text-sky-400">coder</span>
					<span class="text-white">=</span>
					<span class="text-white">{`{`}</span>
				</div>
				<div>
					<span class="text-white ml-8 mr-2">name:</span><span class="text-gray-400">'</span><span
						class="text-amber-300">Siddarth Kotthur</span
					><span class="text-gray-400">',</span>
				</div>
				<div>
					<span class="text-white ml-8 mr-1">skills:</span>
					<span class="text-gray-400">{`[`}</span>
					{#each skills as skill}
						<span class="text-gray-400">'</span><span class="text-amber-300">{skill}</span><span
							class="text-gray-400">'</span
						><span class="text-gray-400">, </span>
					{/each}
					<span class="text-gray-400">{`]`}</span>
				</div>
				<div>
					<span class="text-white ml-8 mr-2">education:</span><span class="text-yellow-400"
						>'Texas A&M University '</span
					><span class="text-gray-400">,</span>
				</div>
				<div>
					<span class="text-white ml-8 mr-1">hobbies:</span>
					<span class="text-gray-400">{`[`}</span>
					{#each hobbies as hobby}
						<span class="text-gray-400">'</span><span class="text-amber-300">{hobby}</span><span
							class="text-gray-400">'</span
						><span class="text-gray-400">, </span>
					{/each}
					<span class="text-gray-400">{`]`}</span>
				</div>
				<div>
					<span class="text-white ml-8 mr-2">light:</span><input size="5"  class="text-orange-400 w-fit bg-transparent border-none focus:outline-none"
						bind:value={light} on:input={change_mode}><span class="animate-pulse border-r-2"></span><span class="text-gray-400">,</span>
				</div>
				<div>
					<span class="text-white ml-8 mr-2">resume:</span><a
						class="text-green-400 cursor-pointer hover:underline"
						href="/resume">'resume.pdf'</a
					><span class="text-gray-400">,</span>
				</div>
				<div>
					<span class="text-white">{`}`}</span>
				</div>
			</code>
		</div>
	</div>
</div>
