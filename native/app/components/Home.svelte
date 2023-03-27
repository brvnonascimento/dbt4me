<script lang="ts">
	let message: string = 'Hello there!';
</script>

<page>
	<gridLayout>
		<label class="info">
			<formattedString>
				<span text={message} />
			</formattedString>
		</label>
	</gridLayout>
</page>

<style>
	gridLayout {
		padding: 16;
	}

	.info {
		font-size: 20;
	}
</style>
