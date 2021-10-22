<div class="hcf_box">
    <style scoped>
        .hcf_box {
            display: grid;
            grid-template-columns: max-content 1fr;
            grid-row-gap: 10px;
            grid-column-gap: 20px;
        }

        .hcf_field {
            display: contents;
        }
    </style>
    <p class="meta-options hcf_field">
        <select id="hcf_author" type="text" name="is_thank_you_page">
            <option <?php echo esc_attr(get_post_meta(get_the_ID(), 'is_thank_you_page', true)) == false ? 'selected' : ''; ?> value="false">No</option>
            <option <?php echo esc_attr(get_post_meta(get_the_ID(), 'is_thank_you_page', true)) == true ? 'selected' : ''; ?> value="true">Yes</option>
        </select>
    </p>
</div>

<!-- <ul>
    <li><strong>Is Thank YOu page: </strong><?php //echo esc_attr(get_post_meta(get_the_ID(), 'is_thank_you_page', true)); 
                                    ?></li>
</ul> -->