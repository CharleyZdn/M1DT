<?php


namespace App\Controller;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

use App\Entity\Openquizzdb;

class QuizController extends Controller
{
    
   
    /**
     * @Route("api/openquizzdbs/checkthemes", name="get_themes")
     */
    public function checkTheme()
    {
        $themes = $this->getDoctrine()
        ->getRepository(Openquizzdb::class)
        ->findAllOrderedByName();

    if($themes){
        $response = new Response(
            json_encode($themes),
            Response::HTTP_OK,
            array('Content-type', 'application/json')
        );
      
        return $response;
    }
    }
     /**
     * @Route("api/openquizzdbs/checkquestion", name="get_question")
     */
    public function checkQuestion()
    {
        $question = $this->getDoctrine()
        ->getRepository(Openquizzdb::class)
        ->findAllOrderedByNameQuest();

    if($question){
        $response = new Response(
            json_encode($question),
            Response::HTTP_OK,
            array('Content-type', 'application/json')
        );
      
        return $response;
    }
    }
}
