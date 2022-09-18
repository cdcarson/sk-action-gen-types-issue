<script lang="ts">
	import type { ActionData } from './$types';
	export let form: ActionData;
	
</script>

<svelte:head>
	<title>Sign In | LinketySplit</title>
</svelte:head>

<h1>Sign In</h1>

<form method="POST">
	<div class="group">
		<label for="email">Email</label>
		<input
			id="email"
			name="email"
			type="email"
			autocomplete="email"
			placeholder="you@example.com"
      value={form.data.email}
			required
		/>
    {#if form.errors.email}
      <div class="error">{form.errors.email}</div>
    {/if}
	</div>
  <div class="group">
		<label for="password">Password</label>
		<input
			id="password"
			name="password"
			type="password"
			autocomplete="current-password"
			placeholder="Password"
      value={form.data.password}
			required
		/>
    {#if form.errors.password}
      <div class="error">{form.errors.password}</div>
    {/if}
	</div>
  <div class="group">
    <input
			id="remember"
			name="remember"
			type="checkbox"
      checked={form.data.remember}
		/>
    <label for="remember">Remember me.</label>
  </div>
	
	<div class="group">
		<button type="submit">
			Sign In
		</button>
	</div>
</form>
