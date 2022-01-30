<?php

namespace App\Services;

use App\Repositories\FormRepository;

class FormService {
     public function __construct(FormRepository $formRepository)
     {
          $this->formRepository = $formRepository;
     }

     public function save($data)
     {
          return $this->formRepository->create($data);
     }
}