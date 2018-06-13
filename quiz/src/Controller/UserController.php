<?php


namespace App\Controller;

use App\Entity\AppUsers;

class UserController extends Controller
{
   
    /**
     * @Route("api/app_users/{username}", name="get_one_user_by_name")
     */
    public function checkUser($username)
    {
        $user = $this->getDoctrine()->getRepository(AppUser::class)->findOneByUserName($username);
        if($user){
            return json_encode(true);
        }
        else{
            return json_encode(false);
        }

    }
}
?>