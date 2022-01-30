<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Form;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\FormService;

class FormController extends Controller
{
     public function __construct(FormService $formService)
     {
          $this->formService = $formService;
     }

     public function save(Request $request)
     {
          // TODO: Validation
          // $this->formService->save($request->validated());
          $formData = $this->formService->save($request->all());

          return response()->json($formData);
     }
}
