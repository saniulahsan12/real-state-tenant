<?php

add_action('rest_api_init', function () {
    register_rest_route('real-state-tenant-survey', '/send-email', array(
        'methods' => 'POST',
        'callback' => 'rest_api__for_tenant_survey',
    ));

    register_rest_route('real-state-tenant-survey', '/thank-you', array(
        'methods' => 'GET',
        'callback' => 'rest_api__thank_you_page',
    ));
});

function rest_api__thank_you_page()
{
    $query = new WP_Query("post_type=page&meta_key=is_thank_you_page&meta_value=true&order=DESC&posts_per_page=-1");
    $output = [];
    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            $output[] = (object)[
                'content' => get_the_content(),
            ];
        }
    }
    return $output;
}

function rest_api__for_tenant_survey($data)
{
    if (!$data->get_body()) {
        return (object)[
            'message' => 'Empty values are not allowed.',
            'status' => 500
        ];
    }

    $mail_data = json_decode($data->get_body());

    $table = '<table><tbody>';

    $count = 1;
    foreach ($mail_data as $key => $value) {
        $table .= '<tr>
                        <th>' . $count . '.</th>
                        <td>
                            <strong>
                                ' . $key . '
                            </strong>
                        </td>
                        <td>' . $value . '</td>
                    </tr>';
        $count++;
    }

    $table .= '</tbody></table>';

    $email_address = get_option('survey_email_address');
    if (empty($email_address)) {
        return (object)[
            'message' => 'Email address not found.',
            'status' => 404
        ];
    }

    $subject = 'Real State Loan Manager Application';

    $threshlod = 6;

    if ($data['type_of_loan'] == 'home_refinance' && $count <= $threshlod) {
        $subject = get_option('survey_subject_refinance_lite');
    }

    if ($data['type_of_loan'] == 'home_refinance' && $count > $threshlod) {
        $subject = get_option('survey_subject_refinance_big');
    }

    if ($data['type_of_loan'] == 'home_purchase' && $count <= $threshlod) {
        $subject = get_option('survey_subject_buy_lite');
    }


    if ($data['type_of_loan'] == 'home_purchase'&& $count > $threshlod) {
        $subject = get_option('survey_subject_buy_big');
    }
    
    $to = $email_address;
    $headers = array('Content-Type: text/html; charset=UTF-8');
    $body = $table;

    if (wp_mail($to, $subject, $body, $headers)) {
        return (object)[
            'message' => 'Mail sent successully.',
            'status' => 200
        ];
    }

    return (object)[
        'message' => 'Error in sending mail.',
        'status' => 500
    ];
}