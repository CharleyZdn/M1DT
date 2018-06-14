<?php


namespace App\Controller;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\AppUsers;

class UserController extends Controller
{
   
    /**
     * @Route("api/app_users/{username}&{password}", name="get_one_user_by_name")
     */
    public function checkUser($username, $password)
    {
        $user = $this->getDoctrine()->getRepository(AppUsers::class)->findOneByUserName($username, password_hash($password, PASSWORD_BCRYPT));
        echo $password;
        echo password_hash($password, PASSWORD_BCRYPT);
        if($user){
            $response = new Response(
            "true",
                Response::HTTP_OK,
                array('content-type' => 'application/json')
            );
          
            return $response;
        }
       
        $response = new Response(
            "false",
                Response::HTTP_OK,
                array('content-type' => 'application/json')
            );
            return $response;
      

    }
}
