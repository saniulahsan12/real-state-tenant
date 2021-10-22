<?php
defined('ABSPATH') or die('No script kiddies please!');
add_action('admin_menu', 'real_state_tenant_form_settings');
function real_state_tenant_form_settings()
{
    add_menu_page('Real State Tenant', 'Real State Tenant', 'manage_options', 'real-state-tenant-survey-settings', 'real_state_tenant_form_settings_details', 'dashicons-buddicons-tracking', 100);
}

function real_state_tenant_form_settings_details()
{
    $status = null;

    if (isset($_POST['save-credence']) && !empty($_POST['survey_email_address'])) {

        update_option('survey_email_address', $_POST['survey_email_address']);
        update_option('survey_subject_buy_lite', $_POST['survey_subject_buy_lite']);
        update_option('survey_subject_buy_big', $_POST['survey_subject_buy_big']);
        update_option('survey_subject_refinance_lite', $_POST['survey_subject_refinance_lite']);
        update_option('survey_subject_refinance_big', $_POST['survey_subject_refinance_big']);
        
        $status = true;
    }
?>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
    <div class="container d-flex justify-content-center" style="margin-top: 5%">
        <div class="col-md-8">
            <div class="jumbotron">
                <form action="" method="post">
                    <br>

                    <div class="form-group">
                        <label>Loan Survey Email Address</label>
                        <input type="text" class="form-control" id="survey_email_address" name="survey_email_address" value="<?php echo get_option('survey_email_address'); ?>" required>
                    </div>

                    <div class="form-group">
                        <label>Home Purchase Subject Small Info</label>
                        <input type="text" class="form-control" id="survey_subject_buy_lite" name="survey_subject_buy_lite" value="<?php echo get_option('survey_subject_buy_lite'); ?>" required>
                    </div>

                    <div class="form-group">
                        <label>Home Purchase Subject Big Info</label>
                        <input type="text" class="form-control" id="survey_subject_buy_big" name="survey_subject_buy_big" value="<?php echo get_option('survey_subject_buy_big'); ?>" required>
                    </div>

                    <div class="form-group">
                        <label>Home Refinance Subject Small Info</label>
                        <input type="text" class="form-control" id="survey_subject_refinance_lite" name="survey_subject_refinance_lite" value="<?php echo get_option('survey_subject_refinance_lite'); ?>" required>
                    </div>

                    <div class="form-group">
                        <label>Home Refinance Subject Big Info</label>
                        <input type="text" class="form-control" id="survey_subject_refinance_big" name="survey_subject_refinance_big" value="<?php echo get_option('survey_subject_refinance_big'); ?>" required>
                    </div>

                    <input id="submit" type="submit" name="save-credence" class="btn btn-success" value="Save Data">
                </form>
                <?php if (!empty($status)) : ?>
                    <br>
                    <div class="alert alert-success" role="alert"><strong>Well done!</strong> You successfully saved
                        this data.
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
<?php
}
